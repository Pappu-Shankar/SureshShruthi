const EmotionBreakpoint = (name) => {
  let mediaQuery;
  switch (name) {
    case "4K":
      mediaQuery = "@media (min-width : 1441px)";
      break;
    case "desktop":
      mediaQuery = "@media (min-width : 992px)";
      break;
    case "notDesktop":
      mediaQuery = "@media (max-width : 991px)";
      break;
    case "tablet":
      mediaQuery = "@media (min-width : 768px) and (max-width : 991px)";
      break;
    case "mobile":
      mediaQuery = "@media (max-width : 767px)";
      break;
    case "notMobile":
      mediaQuery = "@media (min-width : 768px)";
      break;
    case "xs":
      mediaQuery = "@media (max-width : 600px)";
      break;
    default:
      mediaQuery = "@media (min-width : 768px)";
      break;
  }
  return mediaQuery;
};
export default EmotionBreakpoint;
