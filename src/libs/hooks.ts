import { useEffect, useCallback, useRef, useState } from 'react'

// モーダル外側クリック
export const useOutsideClickHandler = (ref, setOpened) => {

  const handleClickOutside = useCallback((event: MouseEvent) => {
    // console.log(ref.current)
    // console.log(event.target)
    if (ref.current && !ref.current.contains(event.target)) {
      setOpened(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [])
}

// モーダルマウント
export const useMount = (ref) => {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#__next");
    setMounted(true);
  }, []);

  return [isMounted, setMounted]
}

// ドラッグオンドロップ
export const useDragOnDrop = (setDragOver) => {
  
  let innerFlag = false 
  const onDragEnter = useCallback(e => {
    setDragOver(true)
    innerFlag = true
  }, []);

  const onDragOver = useCallback(event => {
    event.stopPropagation();
    event.preventDefault();
    setDragOver(true)
    innerFlag = false
  }, []);

  const onDragLeave = useCallback(event => {
    
    if(innerFlag) {
      innerFlag = false
    } else {
      setDragOver(false)
    }
  }, []);

  const onDragEnd = useCallback(event => {
    event.stopPropagation();
    event.preventDefault();
    setDragOver(false)
  }, []);

  useEffect(() => {
    
      document.addEventListener("drop", onDragEnd);
      document.addEventListener("dragenter", onDragEnter);
      document.addEventListener("dragover", onDragOver);
      document.addEventListener("dragleave", onDragLeave);
      
      return () => {
        document.removeEventListener("drop", onDragEnd);
        document.removeEventListener("dragenter", onDragEnter);
        document.removeEventListener("dragover", onDragOver);
        document.removeEventListener("dragleave", onDragLeave);
        
      }

    
  }, [onDragEnter ,onDragOver, onDragLeave]);
}