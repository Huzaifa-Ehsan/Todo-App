import SideBarComponent from "@/pages/components/sidebar/sidebar.component";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen ">
      <div className="w-[20%] bg-[#dfdede]">
        <SideBarComponent/>
      </div>
      <div className="w-[80%] bg-[#eee]">{children}</div>
    </div>
  );
};

export default Layout;
