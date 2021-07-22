import { ReactNode, useEffect, useRef, useState } from "react";
import CloseIcon from "src/components/icons/CloseIcon";
import Loading from "src/components/molecules/Loading";
import Flash from "src/components/molecules/Flash";
import { FormikErrors, FormikTouched } from "formik";
import CompleteFlash from "src/components/molecules/CompleteFlash";

type Props = {
  children: ReactNode;
  title: string;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  closeAction: () => void;
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
  isCompleted: boolean;
  isUpdate?: boolean;
};

// シート
const Sheet: React.FC<Props> = (props) => {
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
    } else {
      setError(null)
    }
  }, [props.errors, props.touched]);

  return (
    <>
      <div className="sheet">
        {/* <Loading label="お待ちください" isLoading={props.isLoading} /> */}
        <div className="sheet-inner">
          <header>
            <div className="close">
              <button
                type="button"
                className="close-button"
                // disabled={props.isLoading}
                onClick={props.closeAction}
              >
                <span className="close-icon">
                  <CloseIcon />
                </span>
              </button>
            </div>
            <h2>{props.title}</h2>

            <div className="action">
              {!props.isUpdate &&
                <button
                  type="submit"
                  className="action-button"
                  disabled={props.isLoading}
                >
                  保存
                </button>
              }
              
            </div>
          </header>
          {error && <Flash errors={error} />}
          {props.isCompleted && <CompleteFlash />}
          <div className="content">
            <div className="content-inner">{props.children}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sheet {
          display: flex;
          flex-flow: column;
          height: 100%;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 799;
          transform: translate3d(0, 0, 0);
          transition: transform 0.35s ease-out;
          background-color: #fff;
          animation: slideIn 0.6s;
        }
        .sheet-inner {
          position: relative;
        }
        @keyframes slideIn {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(0);
          }
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
          display: flex;

          line-height: 2.2;
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
        .close-button:hover {
        }
        h2 {
          text-align: center;
          width: calc(100% - 96px);
          margin: 0;
          padding: 20px 6px;
          font-weight: 600;
          line-height: 1.333;
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
        .content {
          flex: 1 1 auto;
          display: flex;
          flex-flow: column;
          overflow-y: auto;
          position: relative;
          height: calc(100vh - 72px);
        }
        .content-inner {
          max-width: 800px;
          width: 100%;
          margin: 0 auto 44px auto;
        }
        .action-button {
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
        .action-button:disabled {
          cursor: not-allowed;
          background: rgba(0, 0, 0, 0.05);
          color: rgba(0, 0, 0, 0.3);
          opacity: 1;
        }
        @media (min-width: 0px) {
          h2 {
            font-size: 12px;
            line-height: 1.999;
          }
          .content {
            padding: 64px 16px;
          }
          .close {
            flex: auto 0 0;
            padding-top: 8px;
          }
          .action {
            padding-top: 8px;
          }
        }
        @media (min-width: 375px) {
        }
        @media (min-width: 480px) {
        }
        @media (min-width: 768px) {
        }
        @media (min-width: 960px) {
          h2 {
            font-size: 24px;
            line-height: 1.333;
          }
          .content {
            padding: 32px 16px;
          }
          .close {
            flex: 33% 1 1;
            padding-top: 12px;
          }
          .action {
            padding-top: 12px;
          }
        }
        @media (min-width: 1280px) {
        }
      `}</style>
    </>
  );
};

export default Sheet;
