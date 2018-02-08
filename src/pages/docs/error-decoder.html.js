/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import ErrorDecoder from 'components/ErrorDecoder';
import Flex from 'components/Flex';
import hex2rgba from 'hex2rgba';
import MarkdownHeader from 'components/MarkdownHeader';
import React from 'react';
import StickyResponsiveSidebar from 'components/StickyResponsiveSidebar';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import {colors, sharedStyles} from 'theme';
import {createLinkDocs} from 'utils/createLink';
import findSectionForPath from 'utils/findSectionForPath';
import {sectionListDocs} from 'utils/sectionList';

type Props = {
  data: Object,
  location: Location,
};

const ErrorPage = ({data, location}: Props) => (
  <Flex
    direction="column"
    grow="1"
    shrink="0"
    halign="stretch"
    css={{
      width: '100%',
      flex: '1 0 auto',
      position: 'relative',
      zIndex: 0,
    }}>
    <Container>
      <div css={sharedStyles.articleLayout.container}>
        <div css={sharedStyles.articleLayout.sidebar}>
          <StickyResponsiveSidebar
            createLink={createLinkDocs}
            defaultActiveSection={findSectionForPath(
              location.pathname,
              sectionListDocs,
            )}
            location={location}
            sectionList={sectionListDocs}
          />
        </div>
      </div>
    </Container>
  </Flex>
);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ErrorPageMarkdown($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      fields {
        path
      }
      frontmatter {
        title
      }
    }
    errorCodesJson {
      internal {
        contentDigest
      }
    }
  }
`;

export default ErrorPage;
