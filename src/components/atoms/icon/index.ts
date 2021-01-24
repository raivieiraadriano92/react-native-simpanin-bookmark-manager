import { DefaultTheme } from 'styled-components'

import Apps from './sources/apps'
import ArrowLeft from './sources/arrow-left'
import Bookmark from './sources/bookmark'
import ChevronRight from './sources/chevron-right'
import Close from './sources/close'
import CloudCompleted from './sources/cloud-completed'
import CubeAdd from './sources/cube-add'
import Cube from './sources/cube'
import Edit from './sources/edit'
import EyeClosed from './sources/eye-closed'
import Eye from './sources/eye'
import FileDocument from './sources/file-document'
import FileImage from './sources/file-image'
import FolderAdd from './sources/folder-add'
import FolderSave from './sources/folder-save'
import FolderUpload from './sources/folder-upload'
import Google from './sources/google'
import HelpCircle from './sources/help-circle'
import Home from './sources/home'
import ICChecklist from './sources/ic-checklist'
import ICExclamation from './sources/ic-exclamation'
import ICSort from './sources/ic-sort'
import Logo from './sources/logo'
import Menu from './sources/menu'
import MoreHorizontal from './sources/more-horizontal'
import MultipleDocuments from './sources/multiple-documents'
import PersonAdd from './sources/person-add'
import PieChart from './sources/pie-chart'
import Search from './sources/search'
import Setting from './sources/setting'
import Share from './sources/share'
import ShieldSafe from './sources/shield-safe'
import Trash from './sources/trash'

export type Props = {
  alpha?: number
  color?: keyof DefaultTheme['colors']
  size?: number
}

export default {
  Apps,
  ArrowLeft,
  Bookmark,
  ChevronRight,
  Close,
  CloudCompleted,
  CubeAdd,
  Cube,
  Edit,
  EyeClosed,
  Eye,
  FileDocument,
  FileImage,
  FolderAdd,
  FolderSave,
  FolderUpload,
  Google,
  HelpCircle,
  Home,
  ICChecklist,
  ICExclamation,
  ICSort,
  Logo,
  Menu,
  MoreHorizontal,
  MultipleDocuments,
  PersonAdd,
  PieChart,
  Search,
  Setting,
  Share,
  ShieldSafe,
  Trash
}
