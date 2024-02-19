"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  XIcon,
  TwitterShareButton,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { socialMediaTypes } from "./SocialMedia.types";
import { usePathname } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();

const SocialMedia = ({ title, url }: socialMediaTypes) => {
  const defaultPath = `${process.env.SITE_URL}${usePathname()}`;
  const pageFullUrl = url ? url : defaultPath;

  return (
    <div className="flex gap-2">
      <FacebookShareButton url={pageFullUrl} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={pageFullUrl} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>

      <TelegramShareButton url={pageFullUrl} title={title}>
        <TelegramIcon size={32} round />
      </TelegramShareButton>

      <WhatsappShareButton
        url={pageFullUrl}
        title={title}
        separator=":: "
        className="Demo__some-network__share-button"
      >
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialMedia;
