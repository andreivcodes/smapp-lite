import { bech32 } from 'bech32';
import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import {
  FieldError,
  FieldErrors,
  FieldValues,
  get,
  Path,
  UseFormRegister,
  UseFormUnregister,
} from 'react-hook-form';

import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from '@chakra-ui/react';

import { Bech32AddressSchema } from '../api/schemas/address';
import { AccountWithAddress } from '../types/wallet';
import { toHexString } from '../utils/hexString';

type Props<
  T extends FieldValues,
  FieldName extends Path<T>
> = PropsWithChildren<{
  fieldName: FieldName;
  accounts: AccountWithAddress[];
  register: UseFormRegister<T>;
  unregister: UseFormUnregister<T>;
  errors: FieldErrors<T>;
  isSubmitted?: boolean;
  isRequired?: boolean;
}>;

enum Origin {
  Local = 'local',
  Foreign = 'foreign',
}

function FormAddressSelect<T extends FieldValues, FieldName extends Path<T>>({
  fieldName,
  accounts,
  register,
  unregister,
  errors,
  isSubmitted,
  isRequired,
  children,
}: Props<T, FieldName>): JSX.Element {
  const [origin, setOrigin] = useState(Origin.Local);
  useEffect(() => () => unregister(fieldName), [unregister, fieldName, origin]);

  const error = get(errors, fieldName) as FieldError | undefined;
  const renderInputs = () => {
    switch (origin) {
      case Origin.Foreign:
        return (
          <Input
            {...register(fieldName, {
              required: isRequired ? 'Please pick the address' : false,
              validate: (val) => {
                try {
                  Bech32AddressSchema.parse(val);
                  return true;
                } catch (err) {
                  return false;
                }
              },
              setValueAs: (val: string) => {
                const b32 = bech32.decode(val);
                const words = bech32.fromWords(b32.words);
                return toHexString(words);
              },
            })}
          />
        );
      case Origin.Local:
      default:
        return (
          <Select {...register(fieldName)}>
            {accounts.map((acc) => (
              <option key={acc.address} value={acc.address}>
                {acc.displayName} ({acc.address})
              </option>
            ))}
          </Select>
        );
    }
  };

  return (
    <>
      <RadioGroup
        size="sm"
        onChange={(next) => setOrigin(next as Origin)}
        value={origin}
        mb={1}
      >
        <Stack direction="row">
          <Radio value={Origin.Local}>Local Address</Radio>
          <Radio value={Origin.Foreign}>Foreign Address</Radio>
        </Stack>
      </RadioGroup>
      <FormControl
        isRequired={isRequired}
        isInvalid={isSubmitted && !!error?.message}
        mt={2}
        mb={2}
      >
        <InputGroup>
          {renderInputs()}
          {children}
        </InputGroup>
        {error?.message && (
          <FormErrorMessage>{error.message as ReactNode}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
}

FormAddressSelect.defaultProps = {
  isSubmitted: false,
  isRequired: false,
  children: '',
};

export default FormAddressSelect;
