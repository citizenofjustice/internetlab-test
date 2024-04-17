interface InfoBlockProps {
  title: string;
  content: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, content }) => {
  return (
    <div className="info_block">
      <p className="info_block_title">{title}</p>
      <p className="info_block_content">{content}</p>
    </div>
  );
};

export default InfoBlock;
