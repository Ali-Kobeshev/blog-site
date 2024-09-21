export const ImageBlock = ({ editorState, setEditorState, ...props }: any) => {
   const { contentState, block } = props;
   const entity = contentState.getEntity(block.getEntityAt(0));
   const { src } = entity.getData();

   return (
      <div
         style={{
            width: "100%",
            maxHeight: "400px",
            display: "flex",
            justifyContent: "center",
         }}
      >
         <img
            src={src}
            style={{ maxHeight: "400px", marginBottom: "5px" }}
            alt="image"
         />
      </div>
   );
};
