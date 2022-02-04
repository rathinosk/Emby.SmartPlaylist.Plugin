import { PlaylistBasicData, PlaylistRulesTree } from '~/app/types/playlist';
import { RuleCriteriaDefinition, RuleOrRuleGroup } from '~/app/types/rule';
import { TreeNodeData } from '~/common/components/TreeView/types/tree';

export type AppPlaylist = PlaylistBasicData &
    PlaylistRulesTree<Array<TreeNodeData<RuleOrRuleGroup>>>;

export type Source = {
    type: "Playlist" | "Collection",
    id: string,
    name: string
}

export type AppData = {
    appId: string;
    rulesCriteriaDefinitions: RuleCriteriaDefinition[];
    limitOrdersBy: string[];
    sources: Source[],
} & AppPlaylists;

export type AppPlaylists = {
    playlists: AppPlaylist[];
};
