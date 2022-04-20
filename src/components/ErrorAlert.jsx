import AnimatedContent from "./AnimatedContent";

const ErrorAlert = () => {
  return (
    <AnimatedContent>
      <div id="error-alert">
        There seems to be a problem getting your location.. Please check if it's
        typed in correctly.
      </div>
    </AnimatedContent>
  );
};

export default ErrorAlert;
