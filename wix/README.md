# Member bookmarks

The live Wix Agent Skills page runs `agent-skills-page.js` against the HTML component `#html1`. The library remains public; saving or viewing bookmarks calls Wix Members signup/login. Successful authentication resumes the requested save.

CMS collection: `AgentSkillBookmarks`, text field `skillId`.
Permissions: insert `SITE_MEMBER`, read/remove `SITE_MEMBER_AUTHOR`, update `ADMIN`. Wix assigns `_owner`; the iframe cannot supply a member identity. Page code also queries the current member's `_owner`.

The embedded GitHub Pages app exchanges validated messages with the Wix parent through `member-bookmarks.js`. It receives only login status and saved skill IDs. Legacy browser-local bookmarks are not imported; stored browser data is left intact.

Deploy the Wix page code before the GitHub Pages app. Publish the Wix Editor changes, then push the static app to `main`.

Run `node --test tests/bookmarks.test.cjs` for mocked bridge and message-boundary tests. Real signup, cancellation, persistence and collection permissions must also be checked on the published Wix site.
