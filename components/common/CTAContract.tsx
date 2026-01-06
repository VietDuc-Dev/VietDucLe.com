import { Button } from "../ui/button";

interface Props {
  message?: string;
}

export default function CTAContract({ message }: Props) {
  return (
    <div>
      <Button>{message}</Button>
    </div>
  );
}
