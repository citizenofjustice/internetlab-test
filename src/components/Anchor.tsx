interface AnchorProps {
  url: string;
  children: React.ReactNode;
  onClick?: () => void;
  linkClass?: string;
}

const Anchor: React.FC<AnchorProps> = ({
  url,
  linkClass,
  onClick,
  children,
}) => {
  const href = `#${url}`;

  return (
    <a href={href} className={linkClass} onClick={onClick}>
      {children}
    </a>
  );
};

export default Anchor;
