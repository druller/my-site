export interface GenericErrorProps {
  message: string
};

const GenericError: React.FC<GenericErrorProps> = ({ message }) => (
  <div className="text-2xl">
    {message}
  </div>
);

export default GenericError;