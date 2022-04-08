import { EmailProps, EmailTemplates } from "@/graphql/types";
import { getNewPostContent } from "../newPost/content";
import { getForgotPasswordContent } from "../forgotPassword/content";
import { getVerifyUserEmailContent } from "../verifyNewUser/content";
import { getVerifySubscriberEmailContent } from "../verifySubscriber/content";
import { getVerifyUserEmailChangeContent } from "../verifyChangedEmail/content";

export async function getEmailTemplate(props: EmailProps, prismaInstance) {
  switch (props.template_id) {
    case EmailTemplates.ForgotPassword:
      return await getForgotPasswordContent(props, prismaInstance);
    case EmailTemplates.NewPost:
      return await getNewPostContent(props, prismaInstance);
    case EmailTemplates.VerifySubscriber:
      return await getVerifySubscriberEmailContent(props, prismaInstance);
    case EmailTemplates.VerifyNewUser:
      return await getVerifyUserEmailContent(props, prismaInstance);
    case EmailTemplates.VerifyChangedEmail:
      return await getVerifyUserEmailChangeContent(props, prismaInstance);
  }
}
