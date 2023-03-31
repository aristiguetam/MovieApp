import {Text, View, FlatList} from 'react-native';
import currencyFormatter from 'currency-formatter';

import Icon from 'react-native-vector-icons/Ionicons';
import {Cast} from '../interfaces/creditsInterface';
import {MovieFull} from '../interfaces/movieInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({cast, movieFull}: Props) => {
  return (
    <>
      {/* datelles */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={16} color="grey" />
          <Text style={{marginLeft: 5, color: 'black'}}>
            {movieFull.vote_average}
          </Text>

          {/* generos */}
          {
            <Text style={{marginLeft: 5, color: 'grey'}}>
              - {movieFull.genres.map(g => g.name).join(',')}
            </Text>
          }
        </View>

        {/* Historia  */}

        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Historia
        </Text>

        <Text style={{fontSize: 16, color: 'black'}}>{movieFull.overview}</Text>

        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18, color: 'black'}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>

      {/* casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>

        <FlatList
          style={{
            marginTop: 10,
            height: 70,
          }}
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </>
  );
};
