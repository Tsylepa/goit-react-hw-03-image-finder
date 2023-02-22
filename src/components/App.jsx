import ImageFinder from './ImageFinder';

export const App = () => {
  return (
    <>
      <ImageFinder
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gridGap: 16,
          paddingBottom: 24,
        }}
      />
    </>
  );
};
