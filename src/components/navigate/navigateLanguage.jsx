import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NavigateLanguage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/uz");
  }, []);
  return <></>;
};

export default NavigateLanguage;
