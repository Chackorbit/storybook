import AppBar from "./AppBar";
import { navItems } from "../Navigation/Navigation.stories";

const Stories = {
  title: "AppBar",
  component: AppBar,
};

export default Stories;

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImage:
    "https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1651931190~hmac=0ab0ef5ae4c6b11243c9ed8b3e010d3d",
  navItems: navItems,
};
export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  minimized: true,
};
