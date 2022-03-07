import React from 'react';
import { useFormContext } from 'react-hook-form';
import { DropDownList } from '../../DropDownList/DropDownList';
import { DeleteIcon } from '../../icons/DeleteIcon';
import { InputTextField } from '../../InputTextField/InputTextField';
import './IngredientRow.css';

const options = [
  {
    value: 'default',
    label: '-',
    selected: true
  },
  {
    value: 'unit',
    label: 'Unit'
  },
  {
    value: 'cups',
    label: 'Cups'
  },
  {
    value: 'tsp',
    label: 'tsp'
  },
  {
    value: 'tbsp',
    label: 'tbsp'
  }
];

interface Props {
  showLabel?: boolean;
  name: string;
  onDeleteClick: () => void;
}

const IngredientRow: React.FC<Props> = ({ showLabel, name, onDeleteClick }) => {
  const { register } = useFormContext();
  return (
    <div className="IngredientRow">
      <InputTextField
        label={showLabel ? 'Name' : undefined}
        className="name"
        {...register(`${name}.name`)}
      />
      <InputTextField
        label={showLabel ? 'Quantity' : undefined}
        type="number"
        className="quantity"
        {...register(`${name}.quantity`)}
      />
      <DropDownList
        label={showLabel ? 'Unit' : undefined}
        options={options}
        className="unit-dropdown-list"
      />
      <div className="delete">
        <DeleteIcon onClick={onDeleteClick} />
      </div>
    </div>
  );
};

export { IngredientRow };
