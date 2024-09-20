// useFullScreen.ts
import { ref, onMounted, onUnmounted, Ref } from 'vue';

type UseFullScreenReturn = {
  isFullScreen: Ref<boolean,boolean>;
  toggleFullScreen: () => Promise<void>;
};

const useFullScreen = (): UseFullScreenReturn => {
  const isFullScreen = ref(false);

  const toggleFullScreen = async () => {
    const document: Document = window.document;
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
    isFullScreen.value = !!document.fullscreenElement
  };

  onMounted(() => {
    document.addEventListener('fullscreenchange', () => {
      isFullScreen.value = !!document.fullscreenElement
    });
  });

  onUnmounted(() => {
    document.removeEventListener('fullscreenchange', () => {
      isFullScreen.value = !!document.fullscreenElement
    });
  });
  return { isFullScreen, toggleFullScreen };
};

export default useFullScreen;