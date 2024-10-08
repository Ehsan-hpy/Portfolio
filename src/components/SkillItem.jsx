function SkillItem({ children, url }) {
  return (
    <a
      href={url}
      target="blink"
      className="bg-skill relative m-4 h-20 w-20 rounded-md border border-stone-900 duration-300 hover:scale-110 hover:border-blue-600"
    >
      <li className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl">
        {children}
      </li>
    </a>
  );
}

export default SkillItem;
