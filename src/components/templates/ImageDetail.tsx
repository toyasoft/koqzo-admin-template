import { MouseEvent, useEffect, useRef, useState, useCallback } from "react";
import DeleteIcon from "src/components/icons/DeleteIcon";
import CropIcon from "src/components/icons/CropIcon";
import CropSquareIcon from "src/components/icons/CropSquareIcon";
import CropLandscapeIcon from "src/components/icons/CropLandscapeIcon";
import CropPortraitIcon from "src/components/icons/CropPortraitIcon";
import CropFreeIcon from "src/components/icons/CropFreeIcon";
import UndoIcon from "src/components/icons/UndoIcon";
import ChevronLeftIcon from "src/components/icons/ChevronLeftIcon";
import UploadIcon from "src/components/icons/UploadIcon";
import ImageEditButton from "src/components/molecules/ImageEditButton";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import styles from "src/styles/components/templates/ImageDetail.module.scss";

type Props = {
  url?: string;
  file?: File;
  id?: string;
  cropUrl?: string;
  setModalOpened: (isModalOpened: boolean) => void;
  isModalOpened: boolean;
  deleteImage: (event: MouseEvent) => void;
  updateImage: (file: File) => void;
};

// 画像詳細
const ImageDetail: React.FC<Props> = (props) => {
  const [aspect, setAspect] = useState(null);
  const [crop, setCrop] = useState({
    aspect: null,
    height: 0,
    unit: "px",
    width: 0,
    x: 0,
    y: 0,
  });
  console.log(aspect);
  const [cropped, setCropped] = useState(false);
  const imgRef = useRef(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const previewCanvasRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isDragged, setDragged] = useState(false);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    // const image = new Image();
    // image.crossOrigin = "Anonymous";
    // image.src = props.cropUrl ? props.cropUrl : props.url;
    // image.onload = () => {
    const image = imgRef.current;
    const canvas = previewCanvasRef.current;

    const scaleX = imgRef.current.naturalWidth / imgRef.current.width;
    const scaleY = imgRef.current.naturalHeight / imgRef.current.height;
    // console.log(scaleY);
    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      canvas.width,
      canvas.height
    );
    canvas.toBlob((blob) => {
      setFile(blob);
    }, "image/jpeg");
    // };
  }, [completedCrop]);

  return (
    <>
      <div className={styles.imageDetail}>
        <div className={styles.header}>
          <div>
            <ImageEditButton
              handleClick={() => {
                props.setModalOpened(false);
              }}
              title="戻る"
            >
              <ChevronLeftIcon height="36px" width="36px" color="white" />
            </ImageEditButton>
          </div>
          <div className={styles.actions}>
            {/* {cropped && isDragged && (
              <>
                <ImageEditButton
                  handleClick={() => {
                    setDragged(false);
                    setCropped(false);
                    setCrop({
                      aspect: null,
                      height: 0,
                      unit: "px",
                      width: 0,
                      x: 0,
                      y: 0,
                    });
                  }}
                  title="戻る"
                >
                  <UndoIcon />
                </ImageEditButton>
                <ImageEditButton
                  handleClick={() => {
                    props.updateImage(file);
                    setCropped(false);
                    setDragged(false);
                    setCrop({
                      aspect: null,
                      height: 0,
                      unit: "px",
                      width: 0,
                      x: 0,
                      y: 0,
                    });
                  }}
                  title="保存"
                >
                  <UploadIcon />
                </ImageEditButton>
              </>
            )}
            {!cropped && isDragged && (
              <>
                <ImageEditButton
                  handleClick={() => {
                    setDragged(false);
                    setCrop({
                      aspect: null,
                      height: 0,
                      unit: "px",
                      width: 0,
                      x: 0,
                      y: 0,
                    });
                  }}
                  title="戻る"
                >
                  <UndoIcon />
                </ImageEditButton>
                <ImageEditButton
                  handleClick={() => {
                    setCropped(!cropped);
                  }}
                  title="切抜き"
                >
                  <CropIcon />
                </ImageEditButton>
              </>
            )}
            {!cropped && !isDragged && (
              <>
                <ImageEditButton
                  handleClick={() => {
                    setAspect(null);
                    setCrop({
                      aspect: null,
                      height: 0,
                      unit: "px",
                      width: 0,
                      x: 0,
                      y: 0,
                    });
                  }}
                  title="フリー"
                >
                  <CropFreeIcon
                    color={`${aspect === null ? "#49a4d5" : "#ffffff"}`}
                  />
                </ImageEditButton>
                <ImageEditButton
                  handleClick={() => {
                    setAspect(1 / 1);
                    setCrop({
                      aspect: 1 / 1,
                      height: 0,
                      unit: "px",
                      width: 0,
                      x: 0,
                      y: 0,
                    });
                  }}
                  title="正方形"
                >
                  <CropSquareIcon
                    color={`${aspect === 1 / 1 ? "#49a4d5" : "#ffffff"}`}
                  />
                </ImageEditButton>
                <ImageEditButton
                  handleClick={() => {
                    setAspect(4 / 3);
                    setCrop({
                      aspect: 4 / 3,
                      height: 0,
                      unit: "px",
                      width: 0,
                      x: 0,
                      y: 0,
                    });
                  }}
                  title="横長"
                >
                  <CropLandscapeIcon
                    color={`${aspect === 4 / 3 ? "#49a4d5" : "#ffffff"}`}
                  />
                </ImageEditButton>
                <ImageEditButton
                  handleClick={() => {
                    setAspect(3 / 4);
                    setCrop({
                      aspect: 3 / 4,
                      height: 0,
                      unit: "px",
                      width: 0,
                      x: 0,
                      y: 0,
                    });
                  }}
                  title="縦長"
                >
                  <CropPortraitIcon
                    color={`${aspect === 3 / 4 ? "#49a4d5" : "#ffffff"}`}
                  />
                </ImageEditButton>
              </>
            )} */}
            <ImageEditButton
              handleClick={(event) => {
                if (window.confirm("削除しますか？")) {
                  props.deleteImage(event);
                }
              }}
              title="削除"
            >
              <DeleteIcon />
            </ImageEditButton>
          </div>
        </div>
        <canvas
          ref={previewCanvasRef}
          className={`${styles.cropCanvas} ${cropped && styles.visible}`}
        />
        <div className={`${styles.image} ${!cropped && styles.visible}`}>
          <ReactCrop
            src={props.url}
            crop={crop}
            onImageLoaded={onLoad}
            // crossorigin="Anonymous"
            ruleOfThirds={true}
            style={{
              display: "block",
            }}
            imageStyle={{
              maxWidth: "100vw",
              maxHeight: "calc(100vh - 56px)",
            }}
            onDragEnd={() => {
              setDragged(true);
            }}
            onChange={(newCrop) => {
              setCrop(newCrop);
            }}
            onComplete={(c) => setCompletedCrop(c)}
          />
        </div>
      </div>
    </>
  );
};

export default ImageDetail;
