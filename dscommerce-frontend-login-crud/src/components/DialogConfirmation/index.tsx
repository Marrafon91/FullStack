import ButtonInverse from '../ButtonInverse';
import ButtonPrimary from '../ButtonPrimary';

type Props = {
  message: string;
  onDialogAnswer: (response: boolean) => void;
};

export default function DialogConfirmation({ message, onDialogAnswer }: Props) {
  return (
    <div
      className="dsc-dialog-background"
      onClick={() => onDialogAnswer(false)}
    >
      <div
        className="dsc-dialog-box"
        onClick={(event) => event.stopPropagation()}
      >
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(true)}>
            <ButtonPrimary text="Sim" />
          </div>
          <div onClick={() => onDialogAnswer(false)}>
            <ButtonInverse text="Não" />
          </div>
        </div>
      </div>
    </div>
  );
}
