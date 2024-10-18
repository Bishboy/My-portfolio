declare module "react-mailchimp-subscribe" {
  import { ComponentType } from "react";

  type MailchimpSubscribeProps = {
    url: string;
    render?: (props: {
      subscribe: (data: any) => void;
      status: "sending" | "error" | "success" | null;
      message: string | Error | null;
    }) => JSX.Element;
  };

  const MailchimpSubscribe: ComponentType<MailchimpSubscribeProps>;

  export default MailchimpSubscribe;
}
