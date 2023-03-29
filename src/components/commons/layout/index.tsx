import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutFooter from "./footer";
import { useRouter } from "next/router";

const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
  "/section13/13-03-modal-custom",
];

interface IProps {
  children: JSX.Element;
}

export default function Layout(props: IProps): JSX.Element {
  const router = useRouter();
  console.log(router.asPath);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
