import { BottomSheetModal, BottomSheetModalProps, BottomSheetView } from '@gorhom/bottom-sheet';
import { ReactNode, RefObject } from 'react';
import { useTheme } from '~/lib/theme';

const BottomSheetComponent = ({
  ref,
  onChange,
  children,
  ...props
}: {
  ref: RefObject<BottomSheetModal | null>;
  onChange?: (index: number) => void;
  children?: ReactNode;
} & BottomSheetModalProps) => {
  const { isDark } = useTheme();

  return (
    <BottomSheetModal
      ref={ref}
      onChange={onChange}
      containerStyle={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
      backgroundStyle={{
        backgroundColor: isDark ? '#1f2226' : '#fff',
      }}
      handleIndicatorStyle={{
        backgroundColor: isDark ? '#fff' : '#000',
      }}
      {...props}
    >
      <BottomSheetView className="flex-1 p-6 bg-white dark:bg-dark-surface">
        {children}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

export default BottomSheetComponent;
