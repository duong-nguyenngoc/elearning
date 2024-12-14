import type { GetProps } from "antd";
import { Input } from "antd";

type SearchProps = GetProps<typeof Input.Search>;
const { Search } = Input;

export default function HeaderSearchBar() {
  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log({ value, _e, info });
  };

  return (
    <div>
      <Search placeholder="input search text" allowClear onSearch={onSearch} />
    </div>
  );
}
