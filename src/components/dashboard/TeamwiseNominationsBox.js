import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
} from "@material-ui/core";
import { orange } from "@material-ui/core/colors";
import CodeIcon from "@material-ui/icons/Code";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

const devIcon = (
  <svg
    id='Capa_1'
    enableBackground='new 0 0 512 512'
    height={35}
    viewBox='0 0 512 512'
    width={35}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m467 1h-422c-24.813 0-45 20.187-45 45v420c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-420c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v75h-452v-75c0-8.271 6.729-15 15-15zm422 450h-422c-8.271 0-15-6.729-15-15v-315h452v315c0 8.271-6.729 15-15 15z' />
    <path d='m306.909 197.213c-7.614-3.263-16.433.264-19.696 7.878l-90 210c-3.264 7.614.264 16.433 7.878 19.696 7.617 3.264 16.434-.266 19.696-7.878l90-210c3.264-7.615-.264-16.433-7.878-19.696z' />
    <path d='m177.713 246.629c-5.176-6.469-14.617-7.517-21.083-2.342l-75 60c-7.499 5.997-7.504 17.424 0 23.426l75 60c6.469 5.176 15.91 4.126 21.083-2.342 5.175-6.469 4.127-15.909-2.343-21.083l-60.358-48.288 60.358-48.287c6.47-5.175 7.518-14.614 2.343-21.084z' />
    <path d='m430.37 304.287-75-60c-6.469-5.176-15.909-4.127-21.083 2.342-5.175 6.469-4.127 15.909 2.343 21.083l60.358 48.288-60.358 48.287c-6.47 5.175-7.518 14.614-2.343 21.083 5.182 6.476 14.623 7.512 21.083 2.342l75-60c7.499-5.997 7.504-17.423 0-23.425z' />
    <circle cx={76} cy={76} r={15} />
    <circle cx={136} cy={76} r={15} />
    <circle cx={196} cy={76} r={15} />
    <path d='m346 91h90c8.284 0 15-6.716 15-15s-6.716-15-15-15h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15z' />
  </svg>
);
//set them all height={35} & width={35}
//https://www.flaticon.com/search
const qaIcon = (
  <svg
    id='Layer_5'
    enableBackground='new 0 0 64 64'
    height={35}
    width={35}
    viewBox='0 0 64 64'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m43.303 25.925-.701-1.873c-.627.235-1.263.45-1.891.64l.578 1.914c.669-.202 1.347-.431 2.014-.681z' />
    <path d='m37 30.28v-2.688c.742-.119 1.487-.265 2.226-.435l-.451-1.949c-.964.224-1.941.4-2.904.527l-.871.115v4.431c0 .268.006.535.02.801l1.998-.102c-.012-.233-.018-.465-.018-.7z' />
    <path d='m19 13c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z' />
    <path d='m45.478 18.788-.477-.259-.477.259c-3.828 2.074-8.161 3.185-12.53 3.211l-.994.006v8.275c0 8.677 5.489 16.495 13.659 19.453l.341.123.341-.123c8.17-2.958 13.659-10.776 13.659-19.453v-8.275l-.994-.006c-4.366-.026-8.698-1.137-12.528-3.211zm11.522 11.492c0 7.717-4.807 14.682-12 17.445-7.193-2.764-12-9.729-12-17.445v-6.305c4.178-.171 8.297-1.261 12.001-3.177 3.705 1.916 7.823 3.006 11.999 3.177z' />
    <path d='m41 31.586-4.414 4.414 6.414 6.414 12.414-12.414-4.414-4.414-8 8zm11.586-1.586-9.586 9.586-3.586-3.586 1.586-1.586 2 2 8-8z' />
    <path d='m63 18h-4.829c-4.494 0-8.845-1.317-12.622-3.836l-.587-.341-.551.367c-2.277 1.519-4.784 2.595-7.411 3.209v-2.191l-2.635-.62c-.332-1.159-.795-2.275-1.381-3.332l1.426-2.303-5.363-5.363-2.303 1.426c-1.057-.586-2.173-1.049-3.332-1.381l-.62-2.635h-7.584l-.62 2.635c-1.159.332-2.275.795-3.332 1.381l-2.303-1.426-5.363 5.363 1.426 2.303c-.586 1.057-1.049 2.173-1.381 3.332l-2.635.62v7.584l2.635.62c.332 1.159.795 2.275 1.381 3.332l-1.426 2.303 5.363 5.363 2.303-1.426c1.057.586 2.173 1.049 3.332 1.381l.62 2.635h7.584l.62-2.635c1.159-.332 2.275-.795 3.332-1.381l.461.285c.536 4.323 2.198 8.378 4.745 11.78l-3.364 12.335 4.938-1.235 3.737 6.229 3.353-10.059c1.304.659 2.671 1.217 4.104 1.639l.282.084.282-.083c1.433-.422 2.8-.98 4.104-1.639l3.353 10.059 3.737-6.229 4.938 1.235-3.364-12.335c3.127-4.178 4.95-9.332 4.95-14.77zm-36.234 12.646-.523.318c-1.215.736-2.527 1.281-3.903 1.617l-.596.146-.536 2.273h-4.416l-.535-2.273-.596-.146c-1.376-.336-2.688-.881-3.903-1.617l-.523-.318-1.986 1.229-3.123-3.123 1.229-1.986-.318-.523c-.736-1.215-1.281-2.527-1.617-3.903l-.146-.596-2.274-.536v-4.416l2.273-.535.146-.596c.336-1.376.881-2.688 1.617-3.903l.318-.523-1.229-1.987 3.123-3.123 1.986 1.229.523-.318c1.215-.736 2.527-1.281 3.903-1.617l.596-.146.536-2.273h4.416l.535 2.273.596.146c1.376.336 2.688.881 3.903 1.617l.523.318 1.986-1.229 3.123 3.123-1.229 1.986.318.523c.736 1.215 1.281 2.527 1.617 3.903l.146.596 2.274.536v.982c-1.045.146-2.103.226-3.171.226h-.88c-.511-6.15-5.669-11-11.949-11-6.617 0-12 5.383-12 12s5.383 12 12 12c2.98 0 5.82-1.119 8-3.068v2.349c0 .176.018.349.022.524zm.234-12.646v6.979c-1.887 2.518-4.849 4.021-8 4.021-5.514 0-10-4.486-10-10s4.486-10 10-10c5.176 0 9.446 3.954 9.949 9zm9.739 39.621-2.263-3.771-3.062.765 2.099-7.698c1.552 1.701 3.34 3.189 5.324 4.409zm21.847-3.006-3.062-.765-2.263 3.771-2.098-6.295c1.984-1.22 3.772-2.708 5.324-4.409zm2.414-24.335c0 9.894-6.564 18.765-16 21.676-9.436-2.911-16-11.782-16-21.676v-10.28h2.829c4.673 0 9.203-1.309 13.17-3.808 3.948 2.494 8.489 3.808 13.172 3.808h2.829z' />
  </svg>
);
const SupportIcon = (
  <svg
    id='Capa_1'
    enableBackground='new 0 0 512 512'
    height={35}
    width={35}
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='m255.107 65.06c5.562 0 10.071-4.509 10.071-10.071v-44.918c0-5.562-4.509-10.071-10.071-10.071s-10.071 4.509-10.071 10.071v44.918c.001 5.562 4.51 10.071 10.071 10.071z' />
    <path d='m501.28 345.985-17.791-17.741c-6.329-6.321-14.764-9.803-23.752-9.803-5.747 0-11.264 1.43-16.153 4.109l-33.526-33.486 1.633-1.631c13.601-13.628 13.596-35.773-.001-49.355-4.859-4.868-10.922-8.114-17.531-9.48.91-3.141 1.389-6.431 1.389-9.798 0-9.355-3.634-18.127-10.212-24.678-4.86-4.868-10.922-8.114-17.531-9.48.91-3.141 1.389-6.43 1.389-9.798 0-9.356-3.634-18.127-10.223-24.688-4.976-4.97-11.093-8.116-17.516-9.455 3.436-11.847.5-25.176-8.82-34.512-7.758-7.725-18.285-11.045-28.43-9.969l-66.435-12.575c-10.132-1.922-22.785-3.193-30.772 4.092-.504.46-1.018.989-1.524 1.578-12.384-4.514-26.828-1.826-36.745 8.08-6.579 6.571-10.203 15.339-10.203 24.689 0 3.368.477 6.657 1.386 9.799-6.602 1.365-12.657 4.607-17.5 9.459-6.592 6.565-10.227 15.323-10.234 24.662-.003 3.376.476 6.676 1.39 9.826-6.605 1.362-12.664 4.598-17.522 9.45-6.592 6.585-10.222 15.358-10.222 24.703 0 7.158 2.137 13.977 6.097 19.737-5 1.695-9.58 4.516-13.415 8.347-13.61 13.593-13.615 35.739.009 49.387l1.627 1.62-33.53 33.469c-12.461-5.867-27.814-3.669-38.097 6.601l-17.802 17.752c-6.332 6.324-9.818 14.76-9.819 23.753 0 8.994 3.487 17.431 9.819 23.756l22.217 22.19c3.935 3.931 10.312 3.927 14.242-.008 3.931-3.935 3.927-10.312-.008-14.242l-22.217-22.19c-2.522-2.519-3.911-5.895-3.911-9.505 0-3.609 1.389-6.984 3.905-9.497l17.803-17.753c4.448-4.443 11.256-5.105 16.426-2.014.364.547.785 1.067 1.267 1.55.863.865 1.848 1.528 2.894 2.013l102.093 101.943c.485 1.057 1.151 2.052 2.02 2.922.846.847 1.811 1.502 2.835 1.984 2.159 2.441 3.352 5.559 3.352 8.885 0 3.61-1.389 6.985-3.911 9.504l-17.785 17.764c-5.255 5.232-13.803 5.231-19.042.016l-22.217-22.219c-3.933-3.933-10.309-3.933-14.242 0s-3.933 10.309 0 14.242l22.233 22.235c6.544 6.517 15.138 9.774 23.736 9.774 8.6 0 17.204-3.262 23.756-9.785l17.796-17.775c6.332-6.325 9.819-14.761 9.819-23.756 0-6.419-1.785-12.549-5.104-17.835l37.736-37.69c.04-.041.08-.082.121-.123 4.321-4.467 16.354-3.631 27.991-2.823 8.268.575 17.486 1.214 26.492.176l41.324 41.275c-2.677 4.881-4.106 10.391-4.106 16.129 0 8.985 3.487 17.416 9.819 23.741l17.797 17.775c6.328 6.321 14.763 9.803 23.751 9.803 8.987 0 17.422-3.481 23.751-9.803l107.941-107.81c6.332-6.324 9.819-14.76 9.819-23.754-.001-8.993-3.488-17.429-9.826-23.759zm-267.26-242.55 43.687 8.269-26.149 26.139c-4.045-1.944-9.589-5.57-15.671-11.388-8.325-7.964-14.28-17.159-14.822-22.894-.001-.003-.001-.006-.001-.009 0-.001-.001-.002-.001-.003-.039-.412-.049-.741-.044-.992 1.317-.32 4.815-.675 13.001.878zm-51.058 8.211c5.102-5.097 13.028-5.685 18.793-1.781 3.267 13.698 14.952 26.113 20.209 31.143 3.896 3.728 16.397 14.905 29.015 17.977 1.707 2.447 2.636 5.364 2.636 8.442 0 3.965-1.525 7.672-4.304 10.448-2.771 2.776-6.484 4.304-10.456 4.304-3.973 0-7.686-1.528-10.47-4.317l-.001-.001-.005-.005-45.418-45.336c-2.769-2.765-4.294-6.472-4.294-10.436.001-3.965 1.526-7.672 4.295-10.438zm-26.316 43.947c2.771-2.775 6.48-4.304 10.446-4.304 3.971 0 7.692 1.532 10.481 4.318l36.572 36.499c5.759 5.768 5.759 15.154.02 20.902-2.786 2.775-6.512 4.303-10.491 4.303s-7.705-1.528-10.479-4.291l-.001-.001-27.745-27.739c-.043-.043-.09-.083-.134-.127l-8.68-8.676c-2.785-2.782-4.318-6.496-4.315-10.458.004-3.949 1.532-7.644 4.326-10.426zm-26.366 43.938c2.773-2.769 6.49-4.294 10.468-4.294 3.945 0 7.63 1.503 10.391 4.224l27.83 27.817c2.775 2.764 4.304 6.467 4.304 10.427 0 3.959-1.529 7.662-4.315 10.437-2.772 2.768-6.485 4.293-10.456 4.293-3.977 0-7.702-1.529-10.478-4.293l-10.089-10.077c-.002-.003-.005-.005-.007-.007l-17.647-17.626c-2.782-2.779-4.314-6.491-4.314-10.451 0-3.959 1.532-7.672 4.313-10.45zm-17.54 52.786c2.785-2.782 6.507-4.314 10.48-4.314 3.972 0 7.693 1.531 10.477 4.311l10.103 10.091c2.776 2.764 4.304 6.467 4.304 10.427s-1.529 7.662-4.325 10.448c-2.771 2.775-6.484 4.304-10.456 4.304-3.973 0-7.686-1.528-10.477-4.324l-1.265-1.26c-.017-.017-.03-.035-.046-.051-.019-.018-.039-.034-.058-.052l-8.727-8.693c-5.759-5.771-5.764-15.14-.01-20.887zm205.234 114.458c-3.931-3.936-10.308-3.939-14.242-.009l-8.96 8.949c-8.514 8.514-23.941 7.442-38.86 6.407-16.201-1.126-32.954-2.288-43.795 8.842l-37.095 37.05-92.763-92.627 32.828-32.769c5.426 3.326 11.687 5.109 18.238 5.109 9.359 0 18.135-3.628 24.69-10.195 6.599-6.572 10.234-15.343 10.234-24.699 0-.087-.006-.173-.006-.26.087.001.174.006.261.006 9.346 0 18.115-3.617 24.679-10.173 6.599-6.572 10.234-15.344 10.234-24.699 0-.087-.006-.173-.006-.26.088 0 .176.006.265.006 9.343 0 18.117-3.613 24.725-10.194 6.86-6.871 10.253-15.917 10.188-24.944.09.001.18.006.27.006 9.359-.001 18.134-3.628 24.699-10.205 6.579-6.571 10.203-15.339 10.203-24.689 0-6.539-1.778-12.79-5.093-18.205l28.773-28.761c2.144-2.135 4.788-3.475 7.559-4.028.3-.032.596-.08.889-.138 4.446-.613 9.115.759 12.515 4.145 5.759 5.769 5.759 15.155.021 20.903l-8.763 8.727c-.029.029-.06.055-.089.084l-10.093 10.076c-3.936 3.93-3.94 10.307-.009 14.242 3.932 3.936 10.308 3.939 14.242.009l8.798-8.786c.002-.002.004-.004.006-.006l1.33-1.325c5.775-5.722 15.131-5.71 20.9.051 2.776 2.764 4.305 6.467 4.305 10.427 0 3.959-1.529 7.662-4.327 10.448l-8.813 8.831c-.001.001-.002.002-.003.004l-10.092 10.051c-3.941 3.925-3.954 10.302-.029 14.242 3.925 3.941 10.301 3.953 14.242.029l10.138-10.097c2.771-2.776 6.484-4.304 10.456-4.304 3.973 0 7.687 1.528 10.478 4.324 2.776 2.765 4.304 6.468 4.304 10.428 0 3.959-1.528 7.662-4.32 10.442l-17.57 17.577c-3.932 3.934-3.931 10.31.002 14.242 1.967 1.966 4.543 2.948 7.12 2.948 2.578 0 5.156-.984 7.122-2.951l8.611-8.614c.049-.047.102-.088.151-.137 2.771-2.776 6.484-4.304 10.456-4.304 3.973 0 7.686 1.528 10.467 4.314 5.753 5.747 5.748 15.117 0 20.875l-8.755 8.745c-.003.003-.007.006-.01.009s-.006.007-.009.01l-13.896 13.879c-3.935 3.931-3.939 10.308-.009 14.243 1.967 1.969 4.547 2.954 7.126 2.954 2.575 0 5.151-.982 7.117-2.945l6.797-6.789 32.577 32.539-92.755 92.642-33.234-33.194c2.317-1.49 4.534-3.242 6.615-5.323l8.955-8.944c3.937-3.929 3.941-10.306.01-14.241zm169.078 12.472-107.941 107.81c-2.525 2.522-5.905 3.911-9.517 3.911s-6.992-1.389-9.518-3.912l-17.797-17.775c-2.522-2.518-3.911-5.888-3.911-9.489 0-3.6 1.389-6.97 3.911-9.489l107.941-107.81c2.526-2.523 5.905-3.912 9.518-3.912 3.612 0 6.992 1.389 9.524 3.918l17.791 17.741c2.522 2.519 3.911 5.893 3.911 9.503-.001 3.611-1.39 6.986-3.912 9.504z' />
    <path d='m121.378 56.57c1.966 1.962 4.54 2.942 7.114 2.942 2.58 0 5.161-.986 7.128-2.957 3.929-3.937 3.923-10.313-.014-14.242l-36.698-36.625c-3.936-3.929-10.313-3.924-14.242.014-3.929 3.937-3.923 10.313.014 14.242z' />
    <path d='m381.722 59.512c2.575 0 5.151-.982 7.117-2.945l36.67-36.626c3.935-3.93 3.939-10.307.008-14.242-3.93-3.935-10.306-3.939-14.242-.008l-36.67 36.626c-3.935 3.93-3.939 10.307-.008 14.242 1.967 1.969 4.546 2.953 7.125 2.953z' />
    <path d='m62.819 433.204c-3.899 3.966-3.845 10.343.122 14.242l.029.028c1.957 1.924 4.498 2.882 7.038 2.882 2.607 0 5.214-1.009 7.189-3.018 3.899-3.966 3.83-10.357-.136-14.256-3.965-3.899-10.341-3.844-14.242.122z' />
    <path d='m342.606 352.267c1.532 0 3.086-.349 4.545-1.084 4.966-2.505 6.961-8.561 4.457-13.527-2.505-4.966-8.562-6.962-13.527-4.457l-.056.028c-4.966 2.505-6.933 8.547-4.429 13.513 1.768 3.508 5.324 5.527 9.01 5.527z' />
  </svg>
);
const addOnsIcon = (
  <svg
    version='1.1'
    id='Layer_1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    viewBox='0 0 512 512'
    style={{ enableBackground: "new 0 0 512 512" }}
    xmlSpace='preserve'
    height={35}
    width={35}
  >
    <g>
      <g>
        <g>
          <rect x='445.176' y='222.066' width='15.208' height='32.606' />
          <path
            d='M465.275,103.536V55.237c0-10.89-8.859-19.75-19.749-19.75H292.721c-10.89,0-19.75,8.86-19.75,19.75v48.298h-38.498
V55.237c0-10.89-8.86-19.75-19.75-19.75H61.918c-10.891,0-19.75,8.86-19.75,19.75v48.298H0v372.977h512V103.536H465.275z
 M288.178,55.237c0-2.505,2.038-4.542,4.542-4.542h152.805c2.504,0,4.541,2.038,4.541,4.542v48.298H422.47V64.268h-15.208v39.268
H288.178V55.237z M57.374,55.237c0-2.505,2.038-4.542,4.542-4.542h152.804c2.504,0,4.542,2.038,4.542,4.542v48.298h-29.126
V64.268h-15.208v39.268H57.374V55.237z M496.792,461.305h-36.404V269.298H445.18v192.007H15.208V118.743h26.959h192.305h38.498
h192.305h31.517V461.305z'
          />
          <path
            d='M385.777,275.757c-1.028-0.078-2.067-0.118-3.092-0.118c-10.329,0-20.117,3.942-27.562,11.096
c-0.054,0.051-0.105,0.101-0.159,0.15v-81.028h-81.027c0.05-0.054,0.099-0.105,0.149-0.158
c7.838-8.156,11.84-19.33,10.978-30.656c-1.449-19.026-16.24-34.353-35.171-36.443c-1.494-0.164-3.008-0.248-4.5-0.248
c-21.939,0-39.787,17.848-39.787,39.788c0,10.414,3.994,20.254,11.25,27.719h-81.031v99.334h7.604
c6.248,0,12.237-2.492,16.431-6.835c5.122-5.303,12.213-8.006,19.621-7.435c11.548,0.878,21.213,10.196,22.481,21.673
c0.787,7.121-1.381,13.948-6.105,19.223c-4.661,5.204-11.337,8.189-18.317,8.189c-6.631,0-12.846-2.602-17.502-7.328
c-3.186-3.232-7.177-5.463-11.542-6.449c-0.757-0.172-1.534-0.259-2.307-0.259c-5.715,0-10.364,4.639-10.364,10.343v88.681
h88.991c5.703,0,10.343-4.639,10.343-10.342c0-6.248-2.492-12.238-6.836-16.432c-5.285-5.103-7.994-12.256-7.435-19.622
c0.879-11.548,10.197-21.212,21.675-22.48c0.943-0.105,1.895-0.157,2.831-0.157c13.553,0,24.58,11.027,24.58,24.58
c0,6.606-2.585,12.805-7.281,17.456c-4.555,4.514-7.065,10.396-7.065,16.565c0,5.753,4.68,10.433,10.434,10.433h88.9v-81.031
c7.465,7.255,17.304,11.25,27.719,11.25c11.299,0,22.105-4.83,29.646-13.251c7.537-8.415,11.142-19.728,9.893-31.037
C420.13,291.995,404.803,277.205,385.777,275.757z M401.001,331.817c-4.661,5.205-11.338,8.19-18.317,8.19
c-6.457,0-12.557-2.486-17.174-7c-4.843-4.737-11.287-7.344-18.148-7.344h-7.604v84.126h-67.227
c0.262-0.342,0.551-0.671,0.868-0.987c7.6-7.528,11.785-17.564,11.785-28.259c0-21.94-17.848-39.788-39.788-39.788
c-1.491,0-3.005,0.084-4.5,0.248c-18.931,2.093-33.722,17.419-35.17,36.442c-0.905,11.898,3.482,23.458,12.036,31.718
c0.202,0.195,0.391,0.404,0.569,0.625h-67.295v-64.691c7.3,6.542,16.618,10.117,26.507,10.117
c11.298,0,22.104-4.83,29.646-13.251c7.537-8.415,11.142-19.728,9.892-31.038c-2.092-18.93-17.419-33.72-36.444-35.168
c-1.027-0.078-2.068-0.118-3.092-0.118c-9.906,0-19.212,3.571-26.508,10.116v-64.689l84.126-0.005v-7.604
c0-6.856-2.608-13.299-7.344-18.144c-4.515-4.618-7.001-10.716-7.001-17.174c0-13.553,11.026-24.58,24.579-24.58
c0.936,0,1.888,0.053,2.831,0.157c11.478,1.267,20.796,10.932,21.675,22.481c0.541,7.117-1.867,13.851-6.78,18.964
c-4.831,5.026-7.491,11.525-7.491,18.3v7.604h84.126v84.126h7.604c6.775,0,13.273-2.66,18.301-7.491
c5.061-4.863,11.901-7.314,18.963-6.78c11.548,0.878,21.213,10.196,22.481,21.675
C407.893,319.717,405.725,326.542,401.001,331.817z'
          />
        </g>
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

const CSTicon = (
  <svg
    version='1.1'
    id='Capa_1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    x='0px'
    y='0px'
    viewBox='0 0 479.975 479.975'
    style={{ enableBackground: "new 0 0 479.975 479.975" }}
    xmlSpace='preserve'
    height={35}
    width={35}
  >
    <g>
      <g>
        <g>
          <path d='M239.988,64c4.418,0,8-3.582,8-8V8c0-4.418-3.582-8-8-8s-8,3.582-8,8v48C231.988,60.418,235.569,64,239.988,64z' />
          <path
            d='M121.06,41.976l24,41.6c2.184,3.841,7.068,5.184,10.909,3s5.184-7.068,3-10.909c-0.017-0.031-0.035-0.061-0.053-0.092
l-24-41.6c-2.184-3.841-7.068-5.184-10.909-3c-3.841,2.184-5.184,7.068-3,10.909C121.024,41.915,121.042,41.946,121.06,41.976z'
          />
          <path
            d='M41.996,126.928l41.6,24c3.841,2.184,8.725,0.841,10.909-3c2.163-3.805,0.867-8.642-2.909-10.856l-41.6-24
c-3.841-2.184-8.725-0.841-10.909,3C36.923,119.877,38.219,124.714,41.996,126.928z'
          />
          <path d='M71.988,232c0-4.418-3.582-8-8-8h-48c-4.418,0-8,3.582-8,8s3.582,8,8,8h48C68.406,240,71.988,236.418,71.988,232z' />
          <path
            d='M83.657,313.018c-0.031,0.018-0.062,0.036-0.093,0.054l-41.6,24c-3.841,2.183-5.185,7.067-3.002,10.908
c2.183,3.841,7.067,5.185,10.908,3.002c0.031-0.018,0.062-0.036,0.093-0.054l41.6-24c3.841-2.183,5.185-7.067,3.002-10.908
C92.382,312.179,87.498,310.835,83.657,313.018z'
          />
          <path
            d='M437.98,337.072l-41.6-24c-3.811-2.235-8.713-0.957-10.948,2.854c-2.235,3.811-0.957,8.713,2.854,10.948
c0.031,0.018,0.062,0.036,0.093,0.054l41.6,24c3.841,2.183,8.725,0.839,10.908-3.002
C443.05,344.122,441.755,339.286,437.98,337.072z'
          />
          <path d='M463.988,224h-48c-4.418,0-8,3.582-8,8s3.582,8,8,8h48c4.418,0,8-3.582,8-8S468.406,224,463.988,224z' />
          <path
            d='M392.42,152c1.404,0,2.784-0.37,4-1.072l41.6-24c3.812-2.234,5.09-7.136,2.856-10.947
c-2.214-3.776-7.051-5.072-10.856-2.909l-41.6,24c-3.826,2.209-5.137,7.102-2.928,10.928C386.921,150.475,389.562,152,392.42,152
z'
          />
          <path
            d='M323.988,86.504c3.826,2.209,8.719,0.898,10.928-2.928l24-41.6c2.235-3.811,0.957-8.713-2.854-10.948
c-3.811-2.235-8.713-0.957-10.948,2.854c-0.018,0.031-0.036,0.062-0.054,0.093l-24,41.6
C318.85,79.402,320.161,84.295,323.988,86.504z'
          />
          <path
            d='M239.988,112c-66.243,0.075-119.925,53.757-120,120c0,4.418,3.582,8,8,8c4.418,0,8-3.582,8-8
c0.066-57.41,46.59-103.934,104-104c4.418,0,8-3.582,8-8S244.406,112,239.988,112z'
          />
          <path
            d='M386.388,272.752v-0.04c0.256-0.8,0.488-1.664,0.688-2.448c0.288-1.104,0.528-2.216,0.8-3.328s0.528-2.224,0.68-3.112
c17.737-82.052-34.4-162.947-116.452-180.685c-82.052-17.738-162.947,34.4-180.685,116.452
c-2.302,10.649-3.452,21.514-3.431,32.409c0,3.56,0.152,7.096,0.4,10.608c0.128,1.944,0.32,3.92,0.56,5.992
c0.448,4.08,1.024,8.128,1.8,12.136c0.064,0.328,0.088,0.664,0.176,0.992c0.352,1.832,0.8,3.608,1.224,5.384
c0.248,1.032,0.488,2.064,0.752,3.088c0.12,0.432,0.184,0.8,0.32,1.296c0.32,1.192,0.696,2.32,1.048,3.488
c0.376,1.296,0.736,2.592,1.152,3.872l0.048,0.152c0.72,2.328,1.536,4.592,2.52,7.112c0.184,0.488,0.376,0.968,0.568,1.448
c0.176,0.596,0.407,1.174,0.688,1.728l0.04,0.096c0.536,1.424,1.16,2.84,1.784,4.168l0.104,0.2c0.4,0.904,0.8,1.8,1.232,2.704
c0.2,0.448,0.392,0.944,0.592,1.352c2.143,4.516,4.531,8.912,7.152,13.168l0.744,1.184c0.48,0.8,0.968,1.6,1.456,2.28
l0.984,1.464c0.48,0.704,0.976,1.416,1.464,2.12c0.352,0.512,0.68,1.024,1.04,1.528c0.176,0.288,0.344,0.568,0.568,0.872
c0.168,0.224,0.352,0.448,0.528,0.672c0.312,0.432,0.632,0.8,0.944,1.224c1.312,1.776,2.64,3.536,4,5.256l0.096,0.128
c0.256,0.304,0.52,0.592,0.8,0.896c1.6,1.936,3.2,3.856,4.92,5.72h0.04c1.424,1.6,2.936,3.104,4.44,4.624
c0.48,0.472,0.92,0.976,1.4,1.448c0.208,0.2,0.392,0.424,0.6,0.624c2.16,2.08,4.4,4.072,6.616,6.04
c4.2,3.682,8.63,7.091,13.264,10.208c0.83,0.937,1.869,1.666,3.032,2.128l3.128,23.296c-0.113,0.427-0.188,0.864-0.224,1.304
c0.022,1.23,0.331,2.439,0.904,3.528l5.888,43.776c0.097,0.754,0.304,1.49,0.616,2.184c1.693,3.827,3.733,7.49,6.096,10.944
v0.056l0.064,0.072c24.584,36.658,74.231,46.447,110.889,21.863c8.641-5.795,16.068-13.222,21.863-21.863l0.064-0.072l0.04-0.056
c2.363-3.454,4.403-7.117,6.096-10.944c0.312-0.694,0.519-1.43,0.616-2.184l9.672-71.912c0.56-0.187,1.096-0.437,1.6-0.744
c30.186-20.228,52.133-50.593,61.872-85.6C386.34,272.952,386.388,272.856,386.388,272.752z M197.732,448h84.512
C258.112,469.333,221.863,469.333,197.732,448z M297.492,428c-0.632,1.36-1.328,2.696-2.072,4H184.555
c-0.744-1.296-1.44-2.632-2.072-4l-4.84-36h124.688L297.492,428z M304.468,376.096c-0.168-0.008-0.312-0.096-0.48-0.096H175.492
l-2.152-16h133.296L304.468,376.096z M223.988,344v-74.912l11.272,8.12c2.793,2.012,6.559,2.012,9.352,0l11.376-8.192V344
H223.988z M375.684,240.8c-0.152,2.464-0.376,4.848-0.672,7.248v0.184c-0.098,0.437-0.165,0.881-0.2,1.328v0.16
c-0.048,0.24-0.08,0.48-0.112,0.736c-0.032,0.256-0.048,0.4-0.072,0.616c0,0.232-0.064,0.456-0.096,0.688
c-0.176,1.24-0.36,2.472-0.576,3.704c-0.104,0.56-0.184,1.08-0.32,1.712c-0.128,0.848-0.328,1.76-0.624,3.12v0.144
c-0.2,0.96-0.408,1.92-0.632,2.872c-0.08,0.32-0.136,0.592-0.232,0.952c-0.269,1.315-0.606,2.615-1.008,3.896
c-0.152,0.568-0.32,1.136-0.48,1.704c-0.392,1.448-0.8,2.864-1.344,4.408c-0.656,2.048-1.304,4.096-2.104,6.056l-0.312,0.8
c-0.374,1.04-0.801,2.06-1.28,3.056c-0.175,0.345-0.322,0.704-0.44,1.072l-0.16,0.36c-0.712,1.792-1.504,3.504-2.528,5.6
c-0.576,1.296-1.216,2.52-1.856,3.744l-0.968,1.912c-10.265,18.919-24.887,35.123-42.656,47.272
c-0.416-0.084-0.839-0.132-1.264-0.144h-43.76v-67.248l0.64,0.456c2.789,2.004,6.547,2.004,9.336,0l18.688-13.424
c3.659-2.477,4.618-7.45,2.141-11.109c-2.477-3.659-7.45-4.618-11.109-2.141c-0.122,0.083-0.242,0.169-0.36,0.258l-14.032,10.072
l-14.024-10.072c-2.791-2.008-6.553-2.008-9.344,0l-13.984,10.064l-13.984-10.064c-2.793-2.012-6.559-2.012-9.352,0
l-13.976,10.064l-13.96-10.064c-3.585-2.585-8.587-1.773-11.172,1.812c-2.585,3.585-1.773,8.587,1.812,11.172l18.64,13.432
c2.793,2.012,6.559,2.012,9.352,0l0.688-0.496V344h-43.76c-0.34,0.004-0.679,0.028-1.016,0.072
c-8.638-5.914-16.57-12.799-23.64-20.52c-1.528-1.664-3.008-3.424-4.496-5.224c-0.272-0.328-0.568-0.648-0.84-0.984
c-1.352-1.6-2.592-3.296-3.824-5.008c-0.472-0.64-0.976-1.256-1.432-1.904v-0.048c-0.064-0.096-0.12-0.184-0.184-0.264
l-0.264-0.392c-0.208-0.272-0.376-0.552-0.576-0.8c-1.864-2.704-3.6-5.488-5.264-8.312c-1.6-2.688-3.048-5.384-4.392-8.128
c-0.536-1.064-1.088-2.12-1.6-3.2c-0.152-0.376-0.336-0.8-0.432-1.032l-0.392-0.8l-0.096-0.192v-0.04
c-1.953-4.355-3.67-8.812-5.144-13.352c-0.144-0.432-0.28-0.888-0.424-1.328c-0.728-2.328-1.408-4.68-2.016-7.064
c0-0.128-0.072-0.248-0.096-0.376c-0.048-0.32-0.112-0.638-0.192-0.952c-0.144-0.544-0.248-1.112-0.376-1.656
c-0.384-1.664-0.8-3.32-1.104-5c0-0.184-0.04-0.368-0.072-0.552c-0.424-2.184-0.8-4.448-1.072-6.712
c-0.006-0.497-0.07-0.991-0.192-1.472c0-0.168-0.056-0.44-0.104-0.72c-0.296-2.4-0.512-4.736-0.672-7.32
c-0.256-2.904-0.328-5.816-0.328-8.72c0.084-75.076,60.924-135.916,136-136c75.076,0.084,135.916,60.924,136,136
C375.988,234.904,375.916,237.816,375.684,240.8z'
          />
        </g>
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);
const TeamwiseNominationsBox = (props) => (
  <Card style={{ height: "100%" }} {...props}>
    <CardContent>
      <Grid container spacing={3} style={{ justifyContent: "space-between" }}>
        <Grid item>
          <Typography color='textSecondary' gutterBottom variant='h6'>
            Teamwise Nominations
          </Typography>
          {!props.teams.length && (
          <Typography
              color='textPrimary'
              gutterBottom variant='h6'
              style={{
                fontSize: "15px",
                color: "#172b4d",
                fontWeight: "500",
                marginTop: "30px",
              }}
            >
            No teamwise nominations to display !
          </Typography>

          )}
        </Grid>

        <Grid item>
          <Avatar
            style={{
              backgroundColor: orange[600],
              height: "56px",
              width: "56px",
            }}
          >
            <SupervisorAccountIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {Object.entries(props.teams).map(([team, names]) => {
          return (
            <Box
              key={team}
              style={{
                width: "33%",
                textAlign: "center",
              }}
            >
              {team === "Dev" && devIcon}
              {team === "QA" && qaIcon}
              {team === "Support" && SupportIcon}
              {team === "AddOns" && addOnsIcon}
              {team === "CST" && CSTicon}
              {names.map((name) => (
                <>
                  <Typography color='textPrimary' variant='body1'>
                    {name}
                  </Typography>
                </>
              ))}
            </Box>
          );
        })}
      </Box>
    </CardContent>
  </Card>
);

export default TeamwiseNominationsBox;
