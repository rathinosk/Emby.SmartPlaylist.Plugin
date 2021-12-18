import * as React from 'react';
import { AppContext } from '~/app/state/app.context';
import './PlaylistList.css'
import { ListItem } from '~/common/components/ListItem';

type PlaylistListProps = {};

export const PlaylistList: React.FC<PlaylistListProps> = () => {
    const appContext = React.useContext(AppContext);

    const { getPlaylists, editPlaylist, confirmDeletePlaylist, viewPlaylist } = appContext;

    return (
        <>
            {getPlaylists().map(playlist => (

                <ListItem
                    onDeleteClick={() => confirmDeletePlaylist(playlist)}
                    onEditClick={() => editPlaylist(playlist)}
                    onViewClick={() => viewPlaylist(playlist)}
                    label={playlist.name}
                    type={playlist.smartType}
                />
            ))}
        </>
    );
};
