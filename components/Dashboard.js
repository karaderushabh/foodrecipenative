import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { appId, appkeys } from "../tokenData";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [expandedIngredients, setExpandedIngredients] = useState({});

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?q=${searchQuery}&type=public&app_id=${appId}&app_key=${appkeys}`
      );
      if (response.ok) {
        const data = await response.json();
        setRecipes(data.hits);
        const initialExpandedState = {};
        data.hits.forEach((recipe, index) => {
          initialExpandedState[index] = false;
        });
        setExpandedIngredients(initialExpandedState);
      } else {
        console.error("Error fetching recipes");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const toggleExpand = (index) => {
    setExpandedIngredients({
      ...expandedIngredients,
      [index]: !expandedIngredients[index],
    });
  };

  const renderRecipeItem = ({ item, index }) => (
    <View key={index} style={styles.recipeCard}>
      <Image source={{ uri: item.recipe.image }} style={styles.image} />
      <View style={styles.recipeDetails}>
        <Text style={styles.heading}>{item.recipe.label}</Text>
        <Text>Calories: {Math.round(item.recipe.calories)}</Text>
        <Text>Ingredients:</Text>
        <View>
          {item.recipe.ingredientLines.map((ingredient, i) => (
            <Text
              key={i}
              style={{
                display: i < 4 || expandedIngredients[index] ? "flex" : "none",
              }}
            >
              {ingredient}
            </Text>
          ))}
        </View>
        {item.recipe.ingredientLines.length > 4 && (
          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => toggleExpand(index)}
          >
            <Text style={styles.buttonText}>
              {expandedIngredients[index] ? "View Less" : "View More"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.dashboard}>
      <Text>Welcome to Food Recipe App</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for recipes..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={recipes}
        renderItem={renderRecipeItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: "row",
    paddingTop: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  recipeCard: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  recipeDetails: {
    padding: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  moreButton: {
    marginTop: 10,
    padding: 8,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  searchButton: {
    alignItems: "center",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
  },
});

export default Dashboard;
