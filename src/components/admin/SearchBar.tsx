/** GET search form for list pages; extra filters (e.g. a status select) go in as children. */
export default function SearchBar({
  defaultQ,
  placeholder,
  children,
}: {
  defaultQ?: string;
  placeholder: string;
  children?: React.ReactNode;
}) {
  return (
    <form className="flex flex-col gap-3 sm:flex-row" role="search">
      <input name="q" defaultValue={defaultQ} placeholder={placeholder} className="adm-input sm:max-w-xs" suppressHydrationWarning />
      {children}
      <button type="submit" className="adm-btn adm-btn-ghost">
        Search
      </button>
    </form>
  );
}
