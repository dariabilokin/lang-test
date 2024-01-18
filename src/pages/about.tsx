import { useTranslation } from "react-i18next";
import { GetServerSideProps } from "next";
const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className="items-center justify-center">
      <h1 className="text-3xl font-bold">{t("title")}</h1>{" "}
      <p className="text-xl">{t("content")}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const selectedLanguage =
    context.req.headers.cookie
      ?.split("; ")
      .find((row) => row.startsWith("selectedLanguage="))
      ?.split("=")[1] ?? "en";

  return {
    props: {
      selectedLanguage,
    },
  };
};

export default About;
