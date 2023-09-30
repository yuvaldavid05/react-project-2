import { useContext } from "react";
import { Form } from "react-bootstrap";
import { GeneralContext } from "../App";

export const search = (searchWord, ...values) => {
    const str = values.join('');
    const word = searchWord;
    return str.includes(word);
}

export default function SearchBar() {
    const { searchWord, setSearchWord } = useContext(GeneralContext);

    return (
        <Form className="d-flex searchInput">
            <Form.Control
                type="search"
                placeholder="חיפוש"
                className="me-2"
                aria-label="Search"
                value={searchWord}
                onChange={ev => setSearchWord(ev.target.value)}
            />

        </Form>
    );
}