import { useEffect } from 'react';
import { Form, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Text,
} from '@chakra-ui/react';
import { IconArrowNarrowRight } from '@tabler/icons-react';

import logo from '../../assets/logo_white.svg';
import BackButton from '../../components/BackButton';
import PasswordInput from '../../components/PasswordInput';
import useWallet from '../../store/useWallet';

import { useWalletCreation } from './WalletCreationContext';

type FormValues = {
  password: string;
  confirm: string;
};

function SetPasswordScreen(): JSX.Element {
  const {
    register,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitted },
    handleSubmit,
  } = useForm<FormValues>();
  const ctx = useWalletCreation();
  const navigate = useNavigate();
  const { createWallet } = useWallet();

  useEffect(() => {
    if (ctx.mnemonic.length === 0) {
      navigate('/');
    }
  }, [ctx.mnemonic, navigate]);

  const onSubmit = handleSubmit((vals) => {
    ctx.setPassword(vals.password);
    createWallet(vals.password, ctx.mnemonic);
    setValue('password', '');
    setValue('confirm', '');
    reset();
    navigate('/wallet');
  });

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      w={{ base: '100%', md: '75%' }}
      maxW="4xl"
    >
      <Image src={logo} width={200} my={8} />

      <Card
        fontSize="sm"
        marginY={4}
        padding={0}
        w={{ base: '100%', md: '50%' }}
      >
        <CardHeader mb={20} mt={4} textAlign="center">
          <Text fontSize="xl" as="b">
            Final step to access your wallet
          </Text>
        </CardHeader>
        <CardBody>
          <Form control={control}>
            <FormControl
              isRequired
              isInvalid={isSubmitted && !!errors.password?.message}
              mb={4}
            >
              <Flex w="100%" flexDir="column">
                <FormLabel color="brand.lightAlphaGray" fontSize="small">
                  Set the password:
                </FormLabel>
                <PasswordInput
                  register={register('password', {
                    required: {
                      value: true,
                      message: 'Password cannot be empty',
                    },
                    minLength: {
                      value: 8,
                      message: 'Password should be at least 8 characters long',
                    },
                    validate: (val) => {
                      const hasUpperCase = /[A-Z]/.test(val);
                      const hasLowerCase = /[a-z]/.test(val);
                      const hasNumbers = /\d/.test(val);
                      const hasNonalphas = /\W/.test(val);
                      if (
                        !(
                          hasUpperCase &&
                          hasLowerCase &&
                          hasNumbers &&
                          hasNonalphas
                        )
                      ) {
                        // eslint-disable-next-line max-len
                        return 'Password should contain symbols in upper and lower cases, numbers, and special characters';
                      }
                      return undefined;
                    },
                  })}
                />
                {errors.password?.message && (
                  <FormErrorMessage>{errors.password.message}</FormErrorMessage>
                )}
              </Flex>
            </FormControl>
            <FormControl
              isRequired
              isInvalid={isSubmitted && !!errors.confirm?.message}
              mb={4}
            >
              <Flex w="100%" flexDir="column">
                <FormLabel color="brand.lightAlphaGray" fontSize="small">
                  Confirm the password:
                </FormLabel>
                <PasswordInput
                  register={register('confirm', {
                    validate: (val, { password }) => {
                      if (val !== password) {
                        // eslint-disable-next-line max-len
                        return 'Your passwords do not match';
                      }
                      return undefined;
                    },
                  })}
                />
                {errors.confirm?.message && (
                  <FormErrorMessage>{errors.confirm.message}</FormErrorMessage>
                )}
              </Flex>
            </FormControl>
            <Flex width="100%" justifyContent="center" pt={10}>
              <Button
                type="submit"
                colorScheme="green"
                onClick={onSubmit}
                rightIcon={<IconArrowNarrowRight />}
              >
                Create wallet
              </Button>
            </Flex>
          </Form>
        </CardBody>
      </Card>
      <Flex width="100%" justifyContent="flex-start" mt={12}>
        <BackButton onClick={reset} />
      </Flex>
    </Flex>
  );
}

export default SetPasswordScreen;
