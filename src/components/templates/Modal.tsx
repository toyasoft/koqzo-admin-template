import { ReactNode, useEffect, useRef, useState } from "react";
import { useOutsideClickHandler } from "src/libs/hooks";
import CloseIcon from "src/components/icons/CloseIcon";
import Loading from "src/components/molecules/Loading";
import { FormikErrors, FormikTouched } from "formik";
import Flash from "src/components/molecules/Flash";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  setModalOpened: (isModalOpened: boolean) => void;
  title: string;
  label?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
};

// モーダル
const Modal: React.FC<Props> = (props) => {
  const ref = useRef(null);

  useOutsideClickHandler(ref, props.setModalOpened);

  const [error, setError] = useState(null);
  useEffect(() => {
    if (
      props.errors &&
      props.touched &&
      Object.keys(props.errors).length > 0 &&
      Object.keys(props.touched).length > 0
    ) {
      props.setLoading(false);
      setError(props.errors);
    }
  }, [props.errors, props.touched]);

  return (
    <>
      <div className="wrapper">
        <Loading label="お待ちください" isLoading={props.isLoading} />
        <div className="wrapper-inner" ref={ref}>
          <header>
            <div>
              <div className="close">
                <button
                  className="close-button"
                  onClick={() => {
                    props.setModalOpened(false);
                  }}
                >
                  <span className="close-icon">
                    <CloseIcon />
                  </span>
                </button>
              </div>
            </div>

            <h2>{props.title}</h2>
          </header>
          {error && <Flash errors={error} />}
          <div className="modal-content">{props.children}</div>
          {props.handleClick && (
            <div className="modal-footer">
              <button
                className="cancel-button"
                onClick={() => props.setModalOpened(false)}
              >
                キャンセル
              </button>
              <button
                type={props.type}
                className="delete-button"
                onClick={props.handleClick}
              >
                {props.label}
              </button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;

          z-index: 801;
          background: rgba(0, 0, 0, 0.4);
          opacity: 1;
          transition: opacity 150ms ease-in-out;
        }
        .wrapper-inner {
          display: flex;
          flex-flow: column;
          max-height: calc(100vh - 120px);
          border-radius: 12px;
          overflow: auto;
          position: relative;
          background: #fff;
          flex-direction: column;
        }

        header {
          // position: fixed;
          z-index: 1;
          flex-basis: 72px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          background-color: #fff;
          padding: 0 16px;
          display: flex;
          flex: auto 0 0;
          width: 100%;
        }
        .close-icon {
          width: 22px;
          height: 22px;
          vertical-align: middle;
          display: inline-block;
          margin: auto;
        }
        .close {
          padding: 12px 8px;
          display: flex;
          flex: auto 0 0;
          flex: 33% 1 1;
          line-height: 2.2;
          // padding-top: 12px;
        }
        .close-button {
          min-width: 48px;
          font-size: 0;
          height: 48px;
          width: 48px;
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          // line-height: 48px;
          color: rgba(0, 0, 0, 0.55);
          position: relative;
          font-weight: 500;
          text-align: center;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
            opacity 0.2s ease-in-out;
          user-select: none;
          cursor: pointer;
        }
        .close-button:hover,
        .close-button:focus {
          background: #ebf8ff;
        }
        h2 {
          text-align: center;
          width: calc(100% - 96px);
          margin: 0;
          padding: 20px 6px;
          font-weight: 600;

          letter-spacing: 0.003em;
        }
        .action {
          flex: 33% 1 1;
          display: flex;
          justify-content: flex-end;
          padding-top: 12px;
          line-height: 2.2;
          white-space: nowrap;
        }
        .button {
          background: #49a4d5;
          border: none;
          line-height: 48px;
          color: #fff;
          position: relative;
          height: 48px;
          min-width: 80px;
          padding: 0 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
            opacity 0.2s ease-in-out;
          user-select: none;
          cursor: pointer;
        }
        .modal-content {
          flex: 1 1 auto;
          padding: 24px;
          overflow: auto;
        }
        .modal-footer {
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          padding: 12px 24px;
          z-index: 1;
          flex: none;
          align-items: stretch;
        }
        .cancel-button {
          margin-right: 16px;
          position: relative;
          height: auto;
          min-width: auto;
          padding: 13px 16px;
          line-height: 1.5714285714;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          // line-height: 48px;
          color: #49a4d5;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
            opacity 0.2s ease-in-out;
          user-select: none;
          cursor: pointer;
        }
        .cancel-button:hover,
        .cancel-button:focus {
          background: #ebf8ff;
        }
        .delete-button {
          line-height: 1.5714285714;
          background: ${props.type === "button" ? "#cd4435" : "#49a4d5"};
          border: none;
          // line-height: 48px;
          color: #fff;
          margin-left: auto;
          position: relative;
          height: auto;
          min-width: auto;
          padding: 13px 16px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
            opacity 0.2s ease-in-out;
          user-select: none;
          cursor: pointer;
        }
        @media (min-width: 0px) {
          .wrapper {
            padding: 10px;
          }
          .wrapper-inner {
            width: 100%;
          }
          h2 {
            font-size: 16px;
            line-height: 1.999;
            margin-right: 0px;
          }
        }
        @media (min-width: 375px) {
        }
        @media (min-width: 480px) {
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 960px) {
          .wrapper {
            padding: 60px;
          }
          .wrapper-inner {
            width: 600px;
          }
          h2 {
            font-size: 24px;
            line-height: 1.333;
            margin-right: 48px;
          }
        }
        @media (min-width: 1280px) {
        }
      `}</style>
    </>
  );
};

export default Modal;
