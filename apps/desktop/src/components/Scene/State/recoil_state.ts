import { atom, selector } from 'recoil';

export const contentDrawerActive = atom({
  key: 'contentDrawerActive',
  default: false
});

export const contentState = atom({
  key: 'contentState',
  default: ['Camera', 'Powerpoint', 'Image', 'Text']
});

const contentFilterState = atom({
  key: 'cotentFilterState',
  default: 'Show All'
});

export const filePreviewState = atom({
  key: 'filePreviewState',
  default: ''
});

export const filteredContentState = selector({
  key: 'filteredContentState',
  get: ({ get }) => {
    const filter = get(contentFilterState);
    const content = get(contentState);

    switch (filter) {
      default:
        return content;
    }
  }
});
