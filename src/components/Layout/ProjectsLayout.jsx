function ProjectsLayout({ children, dark }) {
  return (
    <div
      className={`${dark} container max-w-full min-w-[400px]  grid gap-4 grid-cols-1 
        
        sm:grid-cols-1 md:grid-cols-1 
      lg:grid-cols-2 xl:grid-cols-3`}
    >
      {children}
    </div>
  );
}

export default ProjectsLayout;
