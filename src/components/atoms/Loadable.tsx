import { ElementType, Suspense } from "react";

const Loadable = (Component: ElementType) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
