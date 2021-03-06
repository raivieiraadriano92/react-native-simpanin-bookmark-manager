import Icons from './index'

const keys = [
  'Apps',
  'ArrowLeft',
  'Bookmark',
  'CategoryDocuments',
  'CategoryFavorites',
  'CategoryImages',
  'CategoryLinks',
  'CategoryVideos',
  'ChevronRight',
  'Close',
  'CloudCompleted',
  'ColoredFolder',
  'CubeAdd',
  'Cube',
  'Dot',
  'Edit',
  'EyeClosed',
  'Eye',
  'FileDocument',
  'FileImage',
  'FolderAdd',
  'FolderSave',
  'FolderUpload',
  'Google',
  'HelpCircle',
  'Home',
  'ICChecklist',
  'ICExclamation',
  'ICRadioOff',
  'ICRadioOn',
  'ICSort',
  'Logo',
  'Menu',
  'MoreHorizontal',
  'MultipleDocuments',
  'PersonAdd',
  'PieChart',
  'Plus',
  'Search',
  'Setting',
  'Share',
  'ShieldSafe',
  'Trash'
]

describe('Icons', () => {
  it('should have properties', () => {
    expect(Object.keys(Icons)).toEqual(keys)
  })
})
