import '@Views/layout/assets/skeleton.scss';

const Skeleton = ({className, ...props}) => {
  return <span className={`${className} skeleton_box`} {...props} />;
};

export default Skeleton;