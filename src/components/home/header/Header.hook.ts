import { useNavigate } from "react-router";

const useHeader = () => {
  const navigate = useNavigate();

  const navigatePage = (targetLink: string) => {
    navigate(targetLink);
  };

  return {
    navigatePage,
  };
};

export default useHeader;
