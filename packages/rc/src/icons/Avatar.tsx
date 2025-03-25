import { Icon, IconNode, LucideProps } from "lucide-react";

const nodesList: IconNode = [
  ["rect", { width: "100%", height: "100%", strokeWidth: "0", key: "1" }],
  [
    "path",
    {
      fill: "none",
      d: "M513,312s-34-49-73-58c-29.38-6.78-105-4-143,27s-34,81-34,81,74.65,2.35,133-9C468,339,513,312,513,312Z",
      transform: "translate(-260.38 -248.46)",
      key: "2",
    },
  ],
  [
    "path",
    {
      fill: "none",
      d: "M425,542c47,0,90-41.86,90-93.5V337s-2-19-8-20",
      transform: "translate(-260.38 -248.46)",
      key: "3",
    },
  ],
  [
    "path",
    {
      fill: "none",
      d: "M287,365v83.5A93.5,93.5,0,0,0,380.5,542",
      transform: "translate(-260.38 -248.46)",
      key: "4",
    },
  ],
  [
    "path",
    {
      fill: "none",
      d: "M515,379h1a22,22,0,0,1,22,22V412a22,22,0,0,1-22,22h-1",
      transform: "translate(-260.38 -248.46)",
      key: "5",
    },
  ],
  [
    "path",
    {
      fill: "none",
      d: "M287,379h-1a22,22,0,0,0-22,22V412a22,22,0,0,0,22,22h1",
      transform: "translate(-260.38 -248.46)",
      key: "6",
    },
  ],
  [
    "rect",
    {
      fill: "none",
      width: "18",
      height: "31",
      x: "181.62",
      y: "127.54",
      rx: "9",
      key: "7",
    },
  ],
  [
    "rect",
    {
      fill: "none",
      width: "18",
      height: "31",
      x: "76.62",
      y: "127.54",
      rx: "9",
      key: "8",
    },
  ],
  [
    "path",
    {
      fill: "none",
      d: "M349,477a129.07,129.07,0,0,1,32-4c18,0,31,13,34,17",
      transform: "translate(-260.38 -248.46)",
      key: "9",
    },
  ],
  [
    "path",
    {
      fill: "none",
      d: "M372,522s6,27,30,40c0,0,25-6,29-40,0,0-10,4-29,4C384,526,372,522,372,522Z",
      transform: "translate(-260.38 -248.46)",
      key: "10",
    },
  ],
];

export const AvatarIcon = (props: LucideProps) => {
  return (
    <Icon
      id="avatar"
      iconNode={nodesList}
      viewBox="0 0 280.12 316.04"
      fill="none"
      stroke="#000"
      strokeWidth="5px"
      {...props}
    />
  );
};
