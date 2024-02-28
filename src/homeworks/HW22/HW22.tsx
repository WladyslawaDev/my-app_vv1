import { BlueButton, RedButton, DisabledButton } from './styles';
import { RegularInput, DisabledInput } from './styles';

function HW22() {
  return (
    <div>
      <BlueButton name="Blue Button" />
      <RedButton name="Red Button" />
      <DisabledButton name="Disabled Button" disabled />
      <RegularInput placeholder="Regular Input" />
      <DisabledInput placeholder="Disabled Input" disabled />
    </div>
  );
}

export default HW22;
