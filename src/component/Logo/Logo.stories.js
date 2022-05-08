import Logo from "./Logo";

const Stories = {
  title: "Logo",
  component: Logo,
};

export default Stories;

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl:
    "https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1651931190~hmac=0ab0ef5ae4c6b11243c9ed8b3e010d3d",
};
