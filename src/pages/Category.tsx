import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import {
  AdapterLink,
  ImageWithPlaceholder,
  InfiniteScroll,
  PageHeadline,
  PageHeadlineSkeleton
} from "components";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetCategory, useGetPlaylists } from "repositories";
import { stripHtmlTags } from "utils";

const useStyles = makeStyles(
  createStyles({
    root: {
      flexGrow: 1,
      position: "relative"
    }
  })
);

export const Category = () => {
  const classes = useStyles();
  const { id: categoryId } = useParams<{ id: string }>();
  const categoryInfo = useGetCategory(categoryId);
  const playlistsInfo = useGetPlaylists(categoryId);

  if (categoryInfo.isError || playlistsInfo.isError) {
    // TODO error handling
    return <div>error :/</div>;
  }

  return (
    <Box mt={3}>
      {!categoryInfo.data ? (
        <PageHeadlineSkeleton />
      ) : (
        <PageHeadline
          title={categoryInfo.data.name}
          subtitle="Popular playlists"
        />
      )}

      <InfiniteScroll
        canFetchMore={playlistsInfo.canFetchMore}
        isFetching={playlistsInfo.isFetching}
        fetchMore={playlistsInfo.fetchMore}
      >
        <div className={classes.root}>
          <Grid container spacing={2}>
            {(playlistsInfo.data || [])
              .flatMap(pp => pp.items)
              .map(playlist => (
                <Grid item xs={12} sm={4} md={3} key={playlist.id}>
                  <Card>
                    <CardActionArea
                      component={AdapterLink}
                      to={`/playlists/${playlist.id}`}
                    >
                      {/* CardMedia has no placeholder support but would otherwise work with `height: 100%` */}
                      <ImageWithPlaceholder
                        url={playlist.images[0].url}
                        alt={playlist.name}
                      />
                      {playlist.description && (
                        <CardContent>
                          <Typography variant="body1">
                            {stripHtmlTags(playlist.description)}
                          </Typography>
                        </CardContent>
                      )}
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </div>
      </InfiniteScroll>
    </Box>
  );
};
