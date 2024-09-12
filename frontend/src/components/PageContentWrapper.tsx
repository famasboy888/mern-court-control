type ChildrenProps = {
  children: React.ReactNode;
};

const PageContentWrapper = ({ children }: ChildrenProps) => {
  return (
    <>
      <main className="mt-[var(--nav-height)] pt-6 pb-6 max-w-[var(--max-width)] w-[var(--fluid-width)] min-h-[100vh] mx-auto">
        {children}
      </main>
    </>
  );
};

export default PageContentWrapper;
