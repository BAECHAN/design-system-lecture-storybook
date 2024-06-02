type LabelPropsType = {
  htmlFor: string;
  children: string;
};

export default function Label({ htmlFor, children }: LabelPropsType) {
  return (
    <label className="text-sm" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
