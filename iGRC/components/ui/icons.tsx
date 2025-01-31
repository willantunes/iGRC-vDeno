import { h } from "preact";
import { JSX } from "preact/jsx-runtime";
import type { ComponentType } from "preact";

type IconComponent = ComponentType<JSX.HTMLAttributes<HTMLSpanElement>>;

export const icons: Record<string, IconComponent> = {
  // Foundation Icons
  Home: () => <span class="material-icons">home</span>,
  Color: () => <span class="material-icons">palette</span>,
  Typography: () => <span class="material-icons">text_fields</span>,
  Spacing: () => <span class="material-icons">space_bar</span>,
  Border: () => <span class="material-icons">border_style</span>,
  Shadow: () => <span class="material-icons">layers</span>,

  // Component Icons
  Button: () => <span class="material-icons">smart_button</span>,
  Form: () => <span class="material-icons">input</span>,
  Table: () => <span class="material-icons">table_chart</span>,
  Card: () => <span class="material-icons">dashboard</span>,
  Modal: () => <span class="material-icons">open_in_new</span>,
  Tab: () => <span class="material-icons">tab</span>,
  Alert: () => <span class="material-icons">notification_important</span>,
  Tooltip: () => <span class="material-icons">info</span>,

  // Pattern Icons
  Layout: () => <span class="material-icons">grid_view</span>,
  Navigation: () => <span class="material-icons">menu</span>,
  Data: () => <span class="material-icons">data_usage</span>,
  FormPattern: () => <span class="material-icons">dynamic_form</span>,
  Feedback: () => <span class="material-icons">feedback</span>,

  // Guideline Icons
  Accessibility: () => <span class="material-icons">accessibility</span>,
  Responsive: () => <span class="material-icons">devices</span>,
  BestPractices: () => <span class="material-icons">thumb_up</span>,

  // Action Icons
  Add: () => <span class="material-icons">add</span>,
  Edit: () => <span class="material-icons">edit</span>,
  Delete: () => <span class="material-icons">delete</span>,
  Save: () => <span class="material-icons">save</span>,
  Cancel: () => <span class="material-icons">cancel</span>,
  Close: () => <span class="material-icons">close</span>,
  Search: () => <span class="material-icons">search</span>,
  Filter: () => <span class="material-icons">filter_list</span>,
  Sort: () => <span class="material-icons">sort</span>,
  
  // Navigation Icons
  ArrowLeft: () => <span class="material-icons">arrow_back</span>,
  ArrowRight: () => <span class="material-icons">arrow_forward</span>,
  ArrowUp: () => <span class="material-icons">arrow_upward</span>,
  ArrowDown: () => <span class="material-icons">arrow_downward</span>,
  Menu: () => <span class="material-icons">menu</span>,
  More: () => <span class="material-icons">more_vert</span>,

  // Status Icons
  Success: () => <span class="material-icons">check_circle</span>,
  Warning: () => <span class="material-icons">warning</span>,
  Error: () => <span class="material-icons">error</span>,
  Info: () => <span class="material-icons">info</span>,
  Help: () => <span class="material-icons">help</span>,

  // Misc Icons
  Settings: () => <span class="material-icons">settings</span>,
  User: () => <span class="material-icons">person</span>,
  Users: () => <span class="material-icons">group</span>,
  Calendar: () => <span class="material-icons">calendar_today</span>,
  Clock: () => <span class="material-icons">access_time</span>,
  Download: () => <span class="material-icons">download</span>,
  Upload: () => <span class="material-icons">upload</span>,
  Refresh: () => <span class="material-icons">refresh</span>,
  Link: () => <span class="material-icons">link</span>,
  Copy: () => <span class="material-icons">content_copy</span>,
  Print: () => <span class="material-icons">print</span>,
  Share: () => <span class="material-icons">share</span>,
  Favorite: () => <span class="material-icons">favorite</span>,
  Star: () => <span class="material-icons">star</span>,
  Money: () => <span class="material-icons">attach_money</span>,
  Chart: () => <span class="material-icons">trending_up</span>,
}; 