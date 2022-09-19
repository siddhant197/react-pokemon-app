import { useState } from 'react';

export const SearchContainerHooks = () => {
    const [characterName, setCharacterName] = useState('');

    return {
        characterName,
        setCharacterName,
    }
}

export default SearchContainerHooks;