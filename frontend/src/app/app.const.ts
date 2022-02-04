import {
    DateRangeValue,
    DateValue,
    GroupMatchMode,
    LastPeriodValue,
    RuleCriteriaDefinition,
    RuleCriteriaDefinitionType,
    StringValue,
} from '~/app/types/rule';
import { LimitOrderBy, PlaylistLimit, SmartType, UpdateType, CollectionMode as CollectionMode, NewItemOrder } from '~/app/types/playlist';

export const RuleMatchTypes = ['All', 'Any'] as const;
export const PeriodValues = ['days', 'weeks', 'months'] as const;

export const UpdateTypes = [
    'Live',
    'Manual',
    'ShuffleDaily',
    'ShuffleWeekly',
    'ShuffleMonthly',
] as const;

export const SmartTypes = [
    'Playlist',
    'Collection'
] as const;

export const CollectionModes = [
    'Item',
    'Season',
    'Series'
] as const;

export const SourceTypes = [
    'Media Items',
    'Playlist',
    'Collection'
] as const;

export const LimitOrderByValues = ['Random', 'Name'] as const;

export const defaultString: StringValue = {
    kind: 'string',
    value: '',
};

export const defaultDate: DateValue = {
    kind: 'date',
    value: new Date(),
};

export const defaultLastPeriod: LastPeriodValue = {
    kind: 'lastPeriod',
    periodType: 'months',
    value: 1,
};

export const defaultDateRange: DateRangeValue = {
    kind: 'dateRange',
    from: new Date(),
    to: new Date(),
};

export const stringCriteriaDefinitionType: RuleCriteriaDefinitionType = {
    name: 'string',
    operators: [
        { name: 'contains', type: 'string', defaultValue: defaultString },
        { name: 'does not contain', type: 'string', defaultValue: defaultString },
        { name: 'is', type: 'string', defaultValue: defaultString },
        { name: 'is not', type: 'string', defaultValue: defaultString },
        { name: 'starts with', type: 'string', defaultValue: defaultString },
        { name: 'ends with', type: 'string', defaultValue: defaultString },
    ],
};

export const dateCriteriaDefinitionType: RuleCriteriaDefinitionType = {
    name: 'date',
    operators: [
        { name: 'is', type: 'date', defaultValue: defaultDate },
        { name: 'is not', type: 'date', defaultValue: defaultDate },
        { name: 'is after', type: 'date', defaultValue: defaultDate },
        { name: 'is before', type: 'date', defaultValue: defaultDate },
        {
            name: 'is in the last',
            type: 'lastPeriod',
            defaultValue: defaultLastPeriod,
        },
        {
            name: 'is not in the last',
            type: 'lastPeriod',
            defaultValue: defaultLastPeriod,
        },
        {
            name: 'is in the range',
            type: 'dateRange',
            defaultValue: defaultDateRange,
        },
    ],
};

export const defaultRuleCriteriaDefinition: RuleCriteriaDefinition = {
    name: 'Album',
    values: [],
    type: stringCriteriaDefinitionType,
};

export const randomLimitOrderBy: LimitOrderBy = 'Random';
export const nameLimitOrderBy: LimitOrderBy = 'Name';

export const defaultPlaylistLimit: PlaylistLimit = {
    hasLimit: false,
    maxItems: 0,
    orderBy: nameLimitOrderBy,
};

export const defaultNewItemOrder: NewItemOrder = {
    hasSort: false,
    orderBy: nameLimitOrderBy
}

export const defaultUpdateType: UpdateType = 'Live';
export const defaultGroupMatchType: GroupMatchMode = 'All';
export const defaultSmartType: SmartType = 'Playlist';
export const defaultCollectionMode: CollectionMode = 'Item';