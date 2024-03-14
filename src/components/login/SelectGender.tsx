import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type Props = {
  objInput: any;
  errors: any;
  currentValue?: string | any;
};

export default function RowRadioButtonsGroup({
  objInput,
  errors,
  currentValue,
}: Props) {
  return (
    <FormControl>
      <FormLabel>
        <label className="text-[14px] text-textTwo">gender</label>
      </FormLabel>
      <RadioGroup row>
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Male"
          {...objInput}
          checked={currentValue === "male"}
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Female"
          {...objInput}
          checked={currentValue === "female"}
        />
      </RadioGroup>
      {errors[objInput.name]?.message && (
        <small className="text-[red] absolute z-10 top-[100%]">
          {errors[objInput.name]?.message?.toString()}
        </small>
      )}
    </FormControl>
  );
}
